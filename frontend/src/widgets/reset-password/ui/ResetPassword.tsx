import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui";
import { useResetPassword } from "../model/useResetPassword";

export const ResetPassword = () => {
  const { renderStep, description, title } = useResetPassword();

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{renderStep()}</CardContent>
      </Card>
    </div>
  );
};

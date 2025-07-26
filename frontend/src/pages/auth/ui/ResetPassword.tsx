import { CodeVerifyForm } from "@/features/auth/ui/forms/CodeVerifyForm";
import { ConfirmPasswordForm } from "@/features/auth/ui/forms/ConfirmPasswordForm";
import { EmailEntryForm } from "@/features/auth/ui/forms/EmailEntryForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui";
import { useState } from "react";
import { useNavigate } from "react-router";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <EmailEntryForm onSuccess={nextStep} />;
      case 1:
        return <CodeVerifyForm onSuccess={nextStep} />;
      case 2:
        return <ConfirmPasswordForm onSuccess={() => navigate("/")} />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (step) {
      case 0:
        return "Введите вашу почту";
      case 1:
        return "Подтвердите код";
      case 2:
        return "Придумайте новый пароль";
      default:
        return "";
    }
  };

  const getDescription = () => {
    switch (step) {
      case 0:
        return "Для смены пароля вашего аккаунта";
      case 1:
        return "Мы отправили код на вашу почту";
      case 2:
        return "Минимум 6 символов. Подтвердите пароль.";
      default:
        return "";
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>{getTitle()}</CardTitle>
          <CardDescription>{getDescription()}</CardDescription>
        </CardHeader>
        <CardContent>{renderStep()}</CardContent>
      </Card>
    </div>
  );
};

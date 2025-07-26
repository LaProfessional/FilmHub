import { CodeVerifyForm, ConfirmPasswordForm, EmailEntryForm } from "@/features/auth";

import { getTexts } from "./getTexts";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

type Step = 0 | 1 | 2;

export const useResetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(0);
  const { titles, descriptions } = getTexts(t);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <EmailEntryForm onSuccess={() => setStep(1)} />;
      case 1:
        return <CodeVerifyForm onSuccess={() => setStep(2)} />;
      case 2:
        return <ConfirmPasswordForm onSuccess={() => navigate("/")} />;
      default:
        return null;
    }
  };

  return {
    title: titles[step],
    description: descriptions[step],
    renderStep,
  };
};

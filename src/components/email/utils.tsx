import { JSX } from "react";

import { ResetPasswordHtml, resetPasswordText } from "./ResetPassword";
import {
  NotificationEmailHtml,
  NotificationEmailProps,
  notificationEmailText,
} from "./Notification";
import { WelcomeEmail, welcomeEmailText } from "./Welcome";

export const welcomeEmail = async (
  name: string,
  onboardLink: string,
): Promise<{ emailReact: JSX.Element; emailText: string }> => {
  const emailReact = <WelcomeEmail name={name} onboardLink={onboardLink} />;
  const emailText = welcomeEmailText({ name, onboardLink });

  return { emailReact, emailText };
};

export const resetPasswordEmail = async (
  name: string,
  resetPasswordLink: string,
): Promise<{ emailReact: JSX.Element; emailText: string }> => {
  const emailReact = (
    <ResetPasswordHtml name={name} resetPasswordLink={resetPasswordLink} />
  );
  const emailText = resetPasswordText({
    name,
    resetPasswordLink: resetPasswordLink,
  });

  return { emailReact, emailText };
};

export const notificationEmail = async (
  props: NotificationEmailProps,
): Promise<{ emailReact: JSX.Element; emailText: string }> => {
  // const emailHtml = await renderEmailHtml(<NotificationEmailHtml {...props} />);
  const emailHtml = <NotificationEmailHtml {...props} />;
  const emailText = notificationEmailText(props);

  return { emailReact: emailHtml, emailText };
};

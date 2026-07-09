import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "react-email";
import { main, container, text, button, anchor } from "./_styles";
import { BASE_URL } from "@/lib/utils/get-url";

export interface ResetPasswordEmailProps {
  name: string;
  resetPasswordLink?: string;
}

const ResetPasswordHtml = ({
  name,
  resetPasswordLink,
}: ResetPasswordEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Reset Password (Q-Sync)</Preview>
        <Container style={container}>
          <Img
            src={`${BASE_URL}/brand/banner.png`}
            width="240"
            height="130"
            alt="banner"
          />
          <Section>
            <Text style={text}>Hi {name},</Text>
            <Text style={text}>
              Someone recently requested a password change for your Q-Sync
              account. If this was you, you can set a new password here:
            </Text>
            <Button style={button} href={resetPasswordLink}>
              Reset password
            </Button>
            <Text style={text}>
              If you don&apos;t want to change your password or didn&apos;t
              request this, just ignore and delete this message.
            </Text>

            <Text style={text}>Have a productive time!</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const resetPasswordText = ({
  name,
  resetPasswordLink,
}: ResetPasswordEmailProps) =>
  `Hello ${name},
Someone recently requested a password change for your Q-Sync
account. If this was you, you can set a new password here: ${resetPasswordLink}

If you don't want to change your password or didn't
request this, just ignore and delete this message.

The link is valid for only 1 hour. If you have any questions, feel free 
to contact support via mailto:q-sync@gaddj.com

Best regards,
Team - Q-Sync`;

ResetPasswordHtml.PreviewProps = {
  name: "Q-Sync",
  resetPasswordLink: "https://q-sync.goldenafricadjibouti.com/",
} as ResetPasswordEmailProps;

export { ResetPasswordHtml, resetPasswordText };

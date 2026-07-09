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

export interface NotificationEmailProps {
  name: string;
  title: string; // e.g., "New Contract Created"
  message: string; // e.g., "A new contract has been issued..."
  ctaText?: string; // e.g., "View Contract"
  ctaLink?: string;
}

const NotificationEmailHtml = ({
  name,
  title,
  message,
  ctaText,
  ctaLink,
}: NotificationEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>{title}</Preview>
      <Container style={container}>
        <Img
          src={`${BASE_URL}/brand/banner.png`}
          width="240"
          height="130"
          alt="banner"
        />
        <Section>
          <Text style={text}>Hi {name},</Text>
          <Text style={text}>{message}</Text>
          {ctaText && ctaLink && (
            <Button style={button} href={ctaLink}>
              {ctaText}
            </Button>
          )}
          <Text style={text}>Thank you!</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const notificationEmailText = ({
  name,
  title,
  message,
  ctaText,
  ctaLink,
}: NotificationEmailProps) =>
  `Hi ${name},

${message}
${ctaLink ? `\n${ctaText}: ${ctaLink}` : ""}

For questions, contact support at support@factory-system.com

Thank you,
Team - Q Sync`;

export { NotificationEmailHtml, notificationEmailText };

// New contract:
// NotificationEmailHtml({
//   name: truckOwnerName,
//   title: "New Contract Created",
//   message: `A new contract (${contractNumber}) has been created for you.`,
//   ctaText: "View Contract",
//   ctaLink: `${BASE_URL}/contracts/${contractId}`
// });

// Booking approval:
// NotificationEmailHtml({
//   name: truckOwnerName,
//   title: "Booking Approved",
//   message: `Your booking (${bookingRef}) has been approved.`,
//   ctaText: "View Booking",
//   ctaLink: `${BASE_URL}/bookings/${bookingId}`
// });

// Loading advice issued:
// NotificationEmailHtml({
//   name: truckOwnerName,
//   title: "Loading Advice Issued",
//   message: `A new loading advice (${adviceNumber}) has been issued.`,
//   ctaText: "View Advice",
//   ctaLink: `${BASE_URL}/loading-advices/${adviceId}`
// });

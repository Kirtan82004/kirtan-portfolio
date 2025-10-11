import {
  Html,
  Head,
  Preview,
  Heading,
  Text,
  Section,
  Row,
} from '@react-email/components';

interface ContactEmailProps {
    name: string;
    email: string;
    message: string;
}

export default function ContactEmail({ name, email, message }:ContactEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <title>New Contact Message</title>
      </Head>
      <Preview>New message from your portfolio contact form</Preview>

      <Section
        style={{
          backgroundColor: '#f9f9f9',
          padding: '40px',
          fontFamily: 'Arial, sans-serif',
          color: '#333',
        }}
      >
        <Heading style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>
          📬 New Contact Form Submission
        </Heading>

        <Row style={{ marginBottom: '20px' }}>
          <Text style={{ fontSize: '16px' }}>
            <strong>Name:</strong> {name}
          </Text>
        </Row>

        <Row style={{ marginBottom: '20px' }}>
          <Text style={{ fontSize: '16px' }}>
            <strong>Email:</strong> {email}
          </Text>
        </Row>

        <Row style={{ marginBottom: '20px' }}>
          <Text style={{ fontSize: '16px' }}>
            <strong>Message:</strong>
          </Text>
          <Text
            style={{
              backgroundColor: '#fff',
              padding: '15px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              marginTop: '8px',
              fontSize: '15px',
              lineHeight: '1.6',
            }}
          >
            {message}
          </Text>
        </Row>

        <Text style={{ fontSize: '14px', color: '#777', marginTop: '30px', textAlign: 'center' }}>
          This message was sent from your portfolio contact form.
        </Text>
      </Section>
    </Html>
  );
}
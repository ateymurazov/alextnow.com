import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'alextnow'

interface ContactNotificationProps {
  name?: string
  email?: string
  message?: string
}

const ContactNotificationEmail = ({ name, email, message }: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {name || 'someone'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New message from {SITE_NAME}</Heading>
        <Text style={text}>You received a new contact form submission.</Text>

        <Section style={card}>
          <Text style={label}>From</Text>
          <Text style={value}>{name || 'Not provided'}</Text>

          <Text style={label}>Email</Text>
          <Text style={value}>{email || 'Not provided'}</Text>

          <Hr style={hr} />

          <Text style={label}>Message</Text>
          <Text style={messageText}>{message || '(empty)'}</Text>
        </Section>

        <Text style={footer}>Sent automatically from alextnow.com</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New contact form submission${data?.name ? ` from ${data.name}` : ''}`,
  to: 'ateymurazov@gmail.com',
  displayName: 'Contact form notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Hi Alex — I would love to chat about a QE leadership role.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0a0a0a', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.5', margin: '0 0 24px' }
const card = { backgroundColor: '#f6f6f7', borderRadius: '12px', padding: '20px 24px' }
const label = { fontSize: '11px', color: '#8b8d93', textTransform: 'uppercase' as const, letterSpacing: '0.08em', margin: '0 0 4px' }
const value = { fontSize: '15px', color: '#0a0a0a', margin: '0 0 16px' }
const messageText = { fontSize: '15px', color: '#0a0a0a', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const, margin: '0' }
const hr = { borderColor: '#e5e5e7', margin: '8px 0 16px' }
const footer = { fontSize: '12px', color: '#999999', margin: '24px 0 0' }

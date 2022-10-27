export interface Mailer {
  send(data: { to: string; subject: string; body: string }): Promise<void>;
}

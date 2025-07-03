-- Create newsletter subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  source VARCHAR(50) DEFAULT 'blog',
  user_agent TEXT,
  ip_address INET
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed_at ON newsletter_subscriptions(subscribed_at);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscriptions(is_active);

-- Insert some sample data (optional)
INSERT INTO newsletter_subscriptions (email, source) VALUES 
  ('example@techblockchainafr.com', 'blog'),
  ('demo@blockchain.africa', 'homepage')
ON CONFLICT (email) DO NOTHING;

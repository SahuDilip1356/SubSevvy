/*
  # Create Subscriptions and Related Tables

  1. New Tables
    - `subscriptions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `name` (text) - Subscription service name
      - `category` (text) - Category: productivity, design, development, marketing, finance, communication
      - `cost` (numeric) - Monthly cost amount
      - `billing_cycle` (text) - monthly or annual
      - `next_renewal_date` (date) - Next renewal date
      - `logo_url` (text) - URL to service logo
      - `status` (text) - active, cancelled, paused
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `savings_alerts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `alert_type` (text) - overlap or better_deal
      - `title` (text) - Alert title
      - `description` (text) - Alert description
      - `savings_amount` (numeric) - Potential savings
      - `related_subscriptions` (jsonb) - Array of subscription IDs
      - `action_url` (text) - Link for comparison/action
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage their own data
*/

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  category text NOT NULL,
  cost numeric(10, 2) NOT NULL,
  billing_cycle text NOT NULL DEFAULT 'monthly',
  next_renewal_date date NOT NULL,
  logo_url text,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create savings_alerts table
CREATE TABLE IF NOT EXISTS savings_alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  alert_type text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  savings_amount numeric(10, 2) NOT NULL,
  related_subscriptions jsonb DEFAULT '[]'::jsonb,
  action_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE savings_alerts ENABLE ROW LEVEL SECURITY;

-- Policies for subscriptions table
CREATE POLICY "Users can view own subscriptions"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscriptions"
  ON subscriptions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions"
  ON subscriptions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own subscriptions"
  ON subscriptions
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for savings_alerts table
CREATE POLICY "Users can view own savings alerts"
  ON savings_alerts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own savings alerts"
  ON savings_alerts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own savings alerts"
  ON savings_alerts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
/*
  # Create User Onboarding Table

  1. New Tables
    - `user_onboarding`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `user_type` (text) - solopreneur, student, startup, hobbyist, group_family
      - `team_size` (text) - solo, small_team, household
      - `objectives` (jsonb) - array of selected objectives
      - `preferred_currency` (text) - USD, EUR, GBP, INR, AUD, SGD, or custom
      - `tracking_method` (text) - spreadsheet, email, bank, none
      - `feature_interests` (jsonb) - array of selected features
      - `dashboard_name` (text, optional) - personalized dashboard name
      - `completed` (boolean) - whether onboarding is complete
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on `user_onboarding` table
    - Add policies for authenticated users to manage their own onboarding data
*/

CREATE TABLE IF NOT EXISTS user_onboarding (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  user_type text,
  team_size text,
  objectives jsonb DEFAULT '[]'::jsonb,
  preferred_currency text DEFAULT 'USD',
  tracking_method text,
  feature_interests jsonb DEFAULT '[]'::jsonb,
  dashboard_name text,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_onboarding ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own onboarding data"
  ON user_onboarding
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own onboarding data"
  ON user_onboarding
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own onboarding data"
  ON user_onboarding
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own onboarding data"
  ON user_onboarding
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
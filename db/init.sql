--CREATE DATABASE IF NOT EXISTS api_test
SELECT 'CREATE DATABASE api_test'
WHERE NOT EXISTS (SELECT
FROM pg_database
WHERE datname = 'api_test')
\gexec
WITH ranked AS (
    SELECT 
        id,
        PERCENT_RANK() OVER (ORDER BY size_of_colony DESC) AS pr
    FROM ecoli_data
)
SELECT 
    id,
    CASE 
        WHEN pr < 0.25 THEN 'CRITICAL'
        WHEN pr < 0.5 THEN 'HIGH'
        WHEN pr < 0.75 THEN 'MEDIUM'
        ELSE 'LOW'
    END AS COLONY_NAME
FROM ranked
ORDER BY id ASC;
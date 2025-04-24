SELECT 
    i.id,
    n.fish_name,
    i.length
FROM fish_info i
JOIN fish_name_info n
    ON i.fish_type = n.fish_type
JOIN (
    SELECT fish_type, MAX(length) AS max_length
    FROM fish_info
    WHERE length IS NOT NULL
    GROUP BY fish_type
) m
    ON i.fish_type = m.fish_type AND i.length = m.max_length
ORDER BY i.id ASC;
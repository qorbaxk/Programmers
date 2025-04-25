-- 코드를 입력하세요
# 들어올땐 중성화x
# 나갈때는 중성화o

select animal_id, animal_type, name
from animal_outs
where 
    animal_id in (SELECT animal_id from animal_ins where sex_upon_intake like '%intact%')
    and (sex_upon_outcome like '%spayed%' or sex_upon_outcome like '%neutered%')
order by animal_id asc;



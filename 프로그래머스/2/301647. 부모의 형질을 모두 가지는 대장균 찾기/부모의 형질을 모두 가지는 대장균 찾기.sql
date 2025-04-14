-- 코드를 작성해주세요
select a.id, a.genotype as genotype, b.genotype as parent_genotype
from ecoli_data as a, ecoli_data as b
where a.parent_id = b.id and
    b.genotype & a.genotype = b.genotype
order by id asc;
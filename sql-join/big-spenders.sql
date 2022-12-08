select "p"."amount",
      "c". "firstName",
      "c"."lastName"
from "payments" as "p"
join "customers" as "c" using ("customerId")
order by "amount" DESC
limit 10;

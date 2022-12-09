select "co"."name" as "country",
  count("c". *) as "totalCities"
  from "cities" as "c"
  join "countries" as "co" using ("countryId")
  group by "co"."countryId"

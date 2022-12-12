select "g"."name" as "genre",
       count("c".*) as "total"
  from "actors" as "a"
  join "castMembers" as "c" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" as "g" using ("genreId")
  where "a"."actorId" = 178
  group by "g"."name"

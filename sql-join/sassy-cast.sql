select  "a". "firstName",
        "a"."lastName"
    from "actors" as "a"
    join "castMembers" using ("actorId")
    join "films" using ("filmId")
    where "title" = 'Jersey Sassy';

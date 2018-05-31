module Routes exposing (..)

import Navigation exposing (Location)
import Route exposing (..)


type SiteMap
    = Home
    | About
    | NotFound


home : Route SiteMap
home =
    Home := static ""


about : Route SiteMap
about =
    About := static "/about"


notFound : Route SiteMap
notFound =
    NotFound := static "/oops"


sitemap : Router SiteMap
sitemap =
    router [ home, about, notFound ]


match : String -> SiteMap
match =
    Route.match sitemap
        >> Maybe.withDefault NotFound


parseRoute : SiteMap -> String
parseRoute route =
    case route of
        Home ->
            reverse home []

        About ->
            reverse about []

        NotFound ->
            reverse notFound []


import { Project } from "./Project";
import GameLevelDesign from "../Images/GameLevelDesign.png"
import DiagonalDanger from "../Images/diagonal-danger.png"

export const Game_Project_Files = [
    new Project({
      id: 1,
      name: 'A Big Knight Out',
      paragraph1:"Currently, I am working on developing a game with a few co-developers, with the aim of releasing it on Steam this year. The game is styled as a chess themed puzzle game, where the player takes control of a knight piece, and attempts to navigate themselves through a series of levels to reach the end goal. Along the way, the player must navigate enemies, moving platforms, portals and all manner of obstacles to solve the turn-based challenges.",
        paragraph2:
        "The game is built entirely using Unity, which uses C# as the default language. The structure of the game is built around the concept of tile, enemy and player moves, which has the added benefit of allowing the turn based sequence to be incredibly simplistic and understandable for the player. The use of chess pieces also helps players easily understand the base mechanics of the game, with the familiarity of the movement of the pieces helping to balance the introduction of new mechanics.",
        paragraph3:
        "A large portion of development has also been spent on the creation of a level designer, which allows the player to create their own puzzles, and has made the level creation side of the game significantly easier. We intend to create a set of story levels for the player to experience, and hope to build a community of players that will share their own creations in the future. Currently we have finished implementing a large portion of the game mechanics, and are now more focused on level design, and how to make interesting and challening puzzles. Stay tuned for future updates!",
       
      imageUrl1: GameLevelDesign,
      imageUrl2: DiagonalDanger,
      brief: "A chess themed puzzle game with an exciting twist!",
      skills: "C#, Unity",
    githubLink: "https://github.com/alasdair-casperd/a-big-knight-out"
    })]
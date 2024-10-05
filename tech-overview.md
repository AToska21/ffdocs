---
outline: deep
---

# Server Technical Overview

## Account Server
The account server is the "entrance" of sorts into the network. All users authenticate to it to recieve an access token to use with other services.
It's coded in NodeJS, and pretty portable.

## Friends Server
The friends server is the core of the network. All game servers are connected to it, and if it goes down, the whole network goes down with it.
It's coded in Go, and pretty annoying to work with if you don't understand Go.

## BOSS Server
Contrary to what you may think, the Splatoon server doesn't control Splatfests or any rotations. In fact it has no idea what rotations there are. It's just SpotPass. SpotPass controls all the rotations and Splatfests for all regions of Splatoon.

## Splatoon Server
Every game server is a NEX server, but the Splatoon server is a bit different. It requires specific protocols for Splatfest matchmaking, and that's what makes it a pain in the --- to work with.
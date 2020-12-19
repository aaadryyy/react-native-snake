import Constants from './Constants'

const GameLoop = (entities, { touches, events, dispatch}) => {
  let head = entities.head

  head.nextMove -= 1
  if(head.nextMove === 0){
    head.nextMove = head.updateFrequency

    head.position[0] += head.xSpeed
    head.position[1] += head.ySpeed
  }
  return entities
}

export default GameLoop
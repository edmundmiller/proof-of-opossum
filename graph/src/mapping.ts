import { Creation, Mint, Vote } from './types/LeaderBoard/LeaderBoard'
import { StatusName } from './types/schema'


export function handleCreation(event: Creation): void {
  let statusName = new StatusName(event.params.nameId.toHex())
  statusName.owner = event.params._from
  statusName.displayName = event.params.name
  statusName.amount = event.params.amount
  statusName.save()
}

export function handleUpdatedStatusName(event: Vote): void {
  let statusName = StatusName.load(event.params.nameId.toHex())
  if (statusName == null) {
    statusName = new StatusName(event.params.nameId.toHex())
  }
  statusName.amount = event.params.total
  statusName.save()
}

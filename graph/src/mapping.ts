import { Creation } from './types/LeaderBoard/LeaderBoard'
import { StatusName } from './types/schema'


export function handleCreation(event: Creation): void {
  let statusName = new StatusName(event.params.Id.toHex())
  statusName.owner = event.params._from
  statusName.displayName = event.params.name
  statusName.amount = event.params.amount
  statusName.save()
}

import React from 'react'

import Card from '../../../../../../UI/Card/Card'
import Label from '../../../../../../UI/Label/Label'
import { timeHelper } from '../../../../../../../helpers'
import css from './StageCard.module.scss'

const StageCard = ({ s }) => (
  <Card title={s.stageName} anchor={s.stageName}>
    {s.services.map((svc) => (
      <React.Fragment key={svc.creationDate}>
        <Label title="Creation Date">
          {timeHelper.nanoToFormat(svc.creationDate)}
        </Label>
        <Label title="Deployed Image">
          {svc.deployedImage}
        </Label>
        <ul className={css.UlEventList}>
          {svc.lastEventTypes &&
            Object.keys(svc.lastEventTypes)
              .sort(
                (a, b) =>
                  svc.lastEventTypes[b].time - svc.lastEventTypes[a].time
              )
              .map((key) => (
                <li key={key}>
                  <ul className={css.UlRun}>
                    <li className={css.LiRunInfo}>
                      <ul className={css.InfoHeader}>
                        <li>context: {svc.lastEventTypes[key].keptnContext}</li>
                        <li>
                          {timeHelper.nanoToFormat(
                            svc.lastEventTypes[key].time
                          )}
                        </li>
                      </ul>
                      <ul className={css.InfoBody}>
                        <li> {key}</li>
                        <li>
                          {timeHelper.nanoFromNow(svc.lastEventTypes[key].time)}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              ))}
        </ul>
      </React.Fragment>
    ))}
  </Card>
)

export default StageCard

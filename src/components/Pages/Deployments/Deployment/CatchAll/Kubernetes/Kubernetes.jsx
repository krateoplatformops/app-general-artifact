import React, { useState } from 'react'
import yaml from 'js-yaml'

import Card from '../../../../../UI/Card/Card'
import Follower from '../../../../../UI/Follower/Follower'
import Resources from './Resources/Resources'
import YamlView from '../../../../../UI/YamlView/YamlView'
import Modal from '../../../../../UI/Modal/Modal'
import Stats from './Stats/Stats'

import css from './Kubernetes.module.scss'

const Kubernetes = ({ deploy, plugin, content }) => {
  const [currentResource, setCurrentResource] = useState(null)

  const closeModalHandler = () => {
    setCurrentResource(null)
  }

  const resourceDetailsHandler = (data) => {
    setCurrentResource(data)
  }

  return (
    <React.Fragment>
      <ul className='ul-fourty-sixty-view'>
        <li className='li-menu'>
          <Follower>
            <Card title={plugin.name}>
              <ul className={css.LeftInfos}>
                <li>
                  {content.resources.length > 0 && (
                    <Stats resources={content.resources} />
                  )}
                </li>
                <li>
                  {content.resources.map((k) => {
                    const icon = require(`../../../../../../assets/kubernetes/${k.icon}.svg`)
                    return (
                      <a
                        href={`#${k.kind}`}
                        key={k.kind}
                        className={css.AnchorLink}
                      >
                        <img src={icon} alt={k.kind} />
                        {k.kind}
                      </a>
                    )
                  })}
                </li>
              </ul>
            </Card>
          </Follower>
        </li>
        <li className='li-content'>
          {content.resources.map((k) => (
            <Resources
              key={k.kind}
              k={k}
              resourceDetailsHandler={resourceDetailsHandler}
            />
          ))}
        </li>
      </ul>
      {currentResource && (
        <Modal
          title={`${currentResource.kind} - ${currentResource.manifest.metadata.name}`}
          closeButtonHandler={closeModalHandler}
        >
          <YamlView
            yaml={yaml.dump(currentResource.manifest)}
            fileName={currentResource.manifest?.metadata?.name}
          />
        </Modal>
      )}
    </React.Fragment>
  )
}

export default Kubernetes

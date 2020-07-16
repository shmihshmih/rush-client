import React from "react"
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import Card from "react-materialize/lib/Card";
import Icon from "react-materialize/lib/Icon";
import CardTitle from "react-materialize/lib/CardTitle";

export const SoloQuestPage = () => {
  //TODO fetch this from bd
  const activeQuests = [
    {
      id: 1,
      caption: "Quest of your bobo",
      description: "a small journey to your ggagabuda",
      type: "solo",
      created: "28-05-2020",
      played: "28",
      rating: "97/100",
      cover: 'https://picsum.photos/200/200?random=1',
      takingTime: '2 hour'
    },
    {
      id: 2,
      caption: "Quest of your bobo",
      description: "a small journey to your ggagabuda",
      type: "solo",
      created: "28-05-2020",
      played: "28",
      rating: "97/100",
      cover: 'https://picsum.photos/200/200?random=2',
      takingTime: '2 hour'
    },
    {
      id: 3,
      caption: "Quest of your bobo",
      description: "a small journey to your ggagabuda",
      type: "solo",
      created: "28-05-2020",
      played: "28",
      rating: "97/100",
      cover: 'https://picsum.photos/200/200?random=3',
      takingTime: '2 hour'
    }
  ]
  const archivedQuests = [
    {
      id: 4,
      caption: "Quest of your bobo",
      description: "a small journey to your ggagabuda",
      type: "solo",
      created: "28-05-2020",
      played: "28",
      rating: "97/100",
      cover: 'https://picsum.photos/200/200?random=4',
      takingTime: '2 hour'
    },
    {
      id: 5,
      caption: "Quest of your bobo",
      description: "a small journey to your ggagabuda",
      type: "solo",
      created: "28-05-2020",
      played: "28",
      rating: "97/100",
      cover: 'https://picsum.photos/200/200?random=5',
      takingTime: '2 hour'
    },
    {
      id: 6,
      caption: "Quest of your bobo",
      description: "a small journey to your ggagabuda",
      type: "solo",
      created: "28-05-2020",
      played: "28",
      rating: "97/100",
      cover: 'https://picsum.photos/200/200?random=6',
      takingTime: '2 hour'
    },
  ]
  return (
    <>
      <h3>Квесты:</h3>
      <h4>Активные:</h4>
      <div>
        <Row>

          {activeQuests.map((item) => {
            return <Col key={item.id}
                        m={6}
                        s={12}
            >
              <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={item.cover} reveal waves="light"/>}
                reveal={<p>{item.description}</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={item.caption}
              >
                <p>
                  <a href={item.id}>
                    Подробнее
                  </a>
                </p>
              </Card>
            </Col>
          })}
        </Row>
      </div>
      <h4>Архив:</h4>
      <div>
        <Row>
          {archivedQuests.map((item) => {
            return <Col key={item.id}
                        m={6}
                        s={12}
            >
              <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={item.cover} reveal waves="light"/>}
                reveal={<p>{item.description}</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={item.caption}
              >
                <p>
                  <a href={item.id}>
                    Подробнее
                  </a>
                </p>
              </Card>
            </Col>
          })}
        </Row>
      </div>
    </>
  )
}
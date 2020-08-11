import React from "react"
import 'materialize-css';
import Carousel from "react-materialize/lib/Carousel";
import {} from "./MainPage.css"
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import Card from "react-materialize/lib/Card";
import Icon from "react-materialize/lib/Icon";
import CardTitle from "react-materialize/lib/CardTitle";
import {NavLink} from "react-router-dom";

export const MainPage = () => {
  return (
    <div>
      <h3>Будь здоров, товарищ!</h3>
      <h4>Добро пожаловать в наше уютное сообщество!</h4>
      <h4>В настоящий момент работает <NavLink key="1" to={"/solo/4/"}>один проект</NavLink>(но зато какой!!), все остальное в разработке</h4>
      <h5>Чем мы тут занимаемся:</h5>
      <Row>
        <Col
          m={6}
          s={12}
        >
          <Card
            closeIcon={<Icon>Свернуть</Icon>}
            header={<CardTitle image="https://picsum.photos/200/200?random=1" reveal waves="light"/>}
            reveal={
              <p>
                Поисковые игры — одиночные или командные игры на местности с элементами городского ориентирования,
                проводящиеся преимущественно в ночное время.
              </p>
            }
            revealIcon={<Icon>Развернуть</Icon>}
            title="Поисковые игры на местности"
          >
            <p>
              <NavLink to="/solo#pi">Узнать больше</NavLink>
            </p>
          </Card>
        </Col>
        <Col
          m={6}
          s={12}
        >
          <Card
            closeIcon={<Icon>Свернуть</Icon>}
            header={<CardTitle image="https://picsum.photos/200/200?random=2" reveal waves="light"/>}
            reveal={
              <p>
                Квесты и викторины, которые можно проходить в одиночку.
              </p>
            }
            revealIcon={<Icon>Развернуть</Icon>}
            title="Соло онлайн-квесты"
          >
            <p>
              <NavLink to="/solo#soloQuests">Узнать больше</NavLink>
            </p>
          </Card>
        </Col>
      </Row>
      <Carousel
        className="carousel"
        carouselId="Carousel-2"
        images={[
          'https://picsum.photos/200/200?random=3',
          'https://picsum.photos/200/200?random=4',
          'https://picsum.photos/200/200?random=5',
          'https://picsum.photos/200/200?random=6',
          'https://picsum.photos/200/200?random=7',
        ]}
        options={{
          fullWidth: true,
          indicators: true
        }}
      />
      <h5>Последние проекты:</h5>
      <Row>
        <Col
          m={6}
          s={12}
        >
          <Card
            actions={[
              <NavLink key="1" to={"/solo/4/"}>Посмотреть</NavLink>
            ]}
            closeIcon={<Icon>Свернуть</Icon>}
            header={<CardTitle image="https://picsum.photos/200/200?random=8"/>}
            horizontal
            revealIcon={<Icon>Развернуть</Icon>}
          >
            Стань стальной крысой!
          </Card>
        </Col>
        <Col
          m={6}
          s={12}
        >
          <Card
            actions={[
              <NavLink key="1" to={"/solo/4/"}>Посмотреть</NavLink>
            ]}
            closeIcon={<Icon>Свернуть</Icon>}
            header={<CardTitle image="https://picsum.photos/200/200?random=9"/>}
            horizontal
            revealIcon={<Icon>Развернуть</Icon>}
          >
            Полковнику никто не пишет...
          </Card>
        </Col>
      </Row>
    </div>
  )
}
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';

//Styles
import './style.css';

const index = () => {
  const [datas, setDatas] = useState([]);
  var count = 0;

  useEffect(() => {
    const getDatas = async () => {
      const api = await fetch(
        'https://6i0go4dj.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27carousel%27%5D+%7B%0A++title%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%0A%7D'
      );
      const data = await api.json();
      console.log(data.result);
      setDatas(data.result);
      count++;
    };
    if (count === 0) {
      getDatas();
    } else {
    }
  }, [count]);
  let itensCarousel = [];
  datas.map((data) => {
    itensCarousel.push({
      img: data.imageUrl,
      title: data.title,
    });
  });
  console.log(itensCarousel);

  useEffect(() => {
    var tx = 0;
    var ty = 10;
    var radius = 450;
    const autorotate = true;
    const rotatespeed = -60;
    const imgwidth = 200;
    const imgheight = 283;

    setTimeout(init, 5000);

    let sx,
      sy,
      nx,
      ny,
      desx = 0,
      desy = 0;
    const odrag = document.getElementById('dragcontainer');
    const ospin = document.getElementById('spincontainer');
    const aimg = Array.from(ospin.querySelectorAll('#img'));

    ospin.style.width = `${imgwidth}px`;
    ospin.style.height = `${imgheight}px`;

    const ground = document.getElementById('ground');
    ground.style.width = `${radius * 3}px`;
    ground.style.height = `${radius * 3}px`;
    function init(delayTime) {
      for (let i = 0; i < aimg.length; i++) {
        aimg[i].style.transform = `rotateY(${
          i * (360 / aimg.length)
        }deg) translateZ(${radius}px)`;
        aimg[i].style.transition = 'transform 1s';
        aimg[i].style.transitionDelay =
          delayTime || (aimg.length - i) / 4 + 's';
      }
    }

    if (autorotate) {
      const animationname = rotatespeed > 0 ? 'spin' : 'spinreverse';
      ospin.style.animation = `${animationname} ${Math.abs(
        rotatespeed
      )}s infinite linear`;
    }

    function applyTranform(obj) {
      if (ty > 180) ty = 180;
      if (ty < 0) ty = 0;

      obj.style.transform = `rotateX(${-ty}deg) rotateY(${tx}deg)`;
    }

    function playSpin(yes) {
      const ospin = document.getElementById('spincontainer');
      ospin.style.animationPlayState = yes ? 'running' : 'paused';
    }

    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;

      sx = e.clientX;
      sy = e.clientY;

      document.onpointermove = function (e) {
        e = e || window.event;
        nx = e.clientX;
        ny = e.clientY;
        desx = nx - sx;
        desy = ny - sy;

        tx = tx + desx * 0.1;
        ty = ty + desy * 0.1;

        const odrag = document.getElementById('dragcontainer');
        applyTranform(odrag);

        sx = nx;
        sy = ny;
        document.onpointerdown = function (e) {
          clearInterval(odrag.timer);
          e = e || window.event;

          sx = e.clientX;
          sy = e.clientY;

          document.onpointermove = function (e) {
            e = e || window.event;
            nx = e.clientX;
            ny = e.clientY;
            desx = nx - sx;
            desy = ny - sy;

            tx = tx + desx * 0.1;
            ty = ty + desy * 0.1;

            const odrag = document.getElementById('dragcontainer');
            applyTranform(odrag);

            sx = nx;
            sy = ny;
          };
          document.onpointerup = function (e) {
            const odrag = document.getElementById('dragcontainer');
            odrag.timer = setInterval(function () {
              desx *= 0.95;
              desy *= 0.95;
              tx = tx + desx * 0.1;
              ty = ty + desy * 0.1;

              applyTranform(odrag);
              playSpin(false);

              if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
                clearInterval(odrag.timer);
                playSpin(true);
              }
            }, 17);
            document.onpointermove = document.onpointerup = null;
          };
          return false;
        };

        document.onmousewheel = function (e) {
          e = e || window.event;
          const d = e.wheelDelta / 20 || -e.detail;
          radius += d;
          init(1);
        };
      };
      document.onpointerup = function (e) {
        const odrag = document.getElementById('dragcontainer');
        odrag.timer = setInterval(function () {
          desx *= 0.95;
          desy *= 0.95;
          tx = tx + desx * 0.1;
          ty = ty + desy * 0.1;

          applyTranform(odrag);
          playSpin(false);

          if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        document.onpointermove = document.onpointerup = null;
      };
      return false;
    };

    document.onmousewheel = function (e) {
      e = e || window.event;
      const d = e.wheelDelta / 20 || -e.detail;
      radius += d;
      init(1);
    };
  }, [datas]);
  return (
    <div className='bodyCarousel  md:flex xxs:hidden h-[150vh] w-full  bg-Anatonelly-Primary'>
      <div id='dragcontainer'>
        <div id='spincontainer'>
          {itensCarousel.length > 0
            ? itensCarousel.map((item, index) => (
                <img id='img' key={index} src={item.img} alt='' />
              ))
            : null}

          <img
            className='w-96'
            id='p'
            src='/InicialScreen/AnatonellyTech.svg'
            alt=''
          />
        </div>
        <div id='ground'></div>
      </div>
    </div>
  );
};

export default index;

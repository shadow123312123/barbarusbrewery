import munichImg from '../images/munich.png';
import munichdarkImg from '../images/munich dark.png';
import kellerbierImg from '../images/kellerbier.png';
import zwickelbierImg from '../images/zwickelbier.png';
import waissbierImg from '../images/waissbier.png';
import blancheImg from '../images/blanche.png';
import stoutImg from '../images/stout.png';
import porterImg from '../images/porter.png';
import apaImg from '../images/apa.png';
import ipaImg from '../images/ipa.png';
import ciderappleImg from '../images/cider apple.png';
import ciderberryImg from '../images/cider berry.png';
import meadmelonImg from '../images/mead melon.png';
import meadligonberryImg from '../images/mead ligonberry.png';


export  function getData() {
    return [
        {title: "Мюнхенский лагер", price: 458, Image: munichImg, id:1},
        {title: "Мюнхенский лагер (тёмное)", price: 458, Image: munichdarkImg, id:2},
        {title: "Кёллербир", price: 465, Image: kellerbierImg, id:3},
        {title: "Цвикельбир", price: 450, Image: zwickelbierImg, id:4},
        {title: "Вайсбир", price: 455, Image: waissbierImg, id:5},
        {title: "Бланш", price: 470, Image: blancheImg, id:6},
        {title: "Молочный стаут", price: 555, Image: stoutImg, id:7},
        {title: "Портер", price: 600, Image: porterImg, id:8},
        {title: "АПА", price: 515, Image: apaImg, id:9},
        {title: "ИПА", price: 525, Image: ipaImg, id:10},
        {title: "Сидр (яблоко)", price: 560, Image: ciderappleImg, id:11},
        {title: "Сидр (ягодный)", price: 560, Image: ciderberryImg, id:12},
        {title: "Медовуха (дыня)", price: 607, Image: meadmelonImg, id:13},
        {title: "Медовуха (брусника)", price: 607, Image: meadligonberryImg, id:14},
    ];
}
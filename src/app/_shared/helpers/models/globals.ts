import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  readonly REQUIRED_ERROR_MSG = 'ce champ est obligatoire';
  readonly REQUIRED_ERROR_PATTERN_MSG = 'respecter le format de ce champ';
  readonly VALIDATE_MSG = 'valider';
  readonly NAV_BAR = {
    HOME_PAGE: 'home',
    CATEGORY_PAGE: 'category',
    CONTACT_PAGE: 'contact',
    FOOD_PAGE: 'food',
    CARTS_PAGE: 'carts',
    ORDERS_PAGE: 'orders',
    DELIVERY_PAGE: 'delivery',
  };
  readonly CATOGORY_LIST = {
    TITLE: 'Spécialités',
    SUB_TITLE: 'Découvrez notre sélection pour de bons plats',
  };
  readonly CART_LIST = {
    TITLE: 'Votre Panier',
    SUB_TITLE: 'effectuer votre commande',
  };
  readonly ORDER_LIST = {
    TITLE: 'Votre Orders',
    SUB_TITLE: 'votre lists des commandes effectuées',
  };
  readonly CATOGORY_MODAL = {
    TITLE: 'Les restaurants avec la ',
    DESCRIPTION: '👇 choisissez votre restaurants 👇',
  };
  readonly FOOTER_PAGE = {
    TITLE: 'FOODY',
    DESCRIPTION: 'Donnez à vos clients un aperçu des plats.',
    MADE_BY: 'Made with ❤️ By Foody',
    POWRED_BY: 'Powered ⚡ By eat.ma',
    COPY_RIGHT: `© FOODY  ${new Date().getFullYear()}`,
  };
  readonly CONTACT_PAGE = {
    TITLE: 'Nous contacter',
    SUB_TITLE: 'pour une partenariat, pour avoir plus d’informations',
    SUBMIT_TITLE: 'ENVOYER',
    EMAIL_RECEPTION: 'youssef.siyed@gmail.com',
  };
  readonly FOOD_PAGE = {
    TITLE: 'Nos Plats',
    SUB_TITLE: 'Découvrez notre bons plats',
    SUBMIT_TITLE: 'ENVOYER',
    EMAIL_RECEPTION: 'youssef.siyed@gmail.com',
    URL: '/foods',
    IMG_EMPTY: '../../../../assets/images/layouts/empty-food.svg',
    TITLE_EMPTY: '☝️ cliquez sur les icons en haut ☝️',
  };
  readonly DELIVRY_PAGE = {
    TITLE: 'Nos Livreurs',
    SUB_TITLE: 'Découvrez les coursiers',
    NOW_MORE: 'Savoir plus..',
  };
  readonly NOT_FOUND_PAGE = {
    TITLE: 'Ajouter quelques plats à votre panier',
    BTN_TITLE: 'Découvrez nos plats',
    IMAGE: '../../../../assets/images/layouts/empty-cart1.svg',
  };
}

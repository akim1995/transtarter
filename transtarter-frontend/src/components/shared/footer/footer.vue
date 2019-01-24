
<template>
  <footer class="footer">
    <div class="footer__content">

      <div class="container">

        <div class="cards_group">
          <div class="card">
            <div class="card_header card_header_logo">ТРАНС СТАРТЕР</div>
            <div
              class="card_body"
              style="line-height: 24px; padding-right: 10px;"
            >Продажа стартеров, генераторов и запчастей с 1995г.</div>
          </div>
          <div class="card">
            <div class="card_body">
              <ul>
                <li><a
                    class="card_link"
                    href="#"
                  >Акции и новинки</a></li>
                <li style="margin-bottom: 20px;"><a
                    class="card_link"
                    href="#"
                  >Доставка и оплата</a></li>

                <li><a
                    class="card_link"
                    href="#"
                  >О компании</a></li>
                <li><a
                    class="card_link"
                    href="#"
                  >Найти точку ремонта</a></li>
                <li style="margin-bottom: 20px;"><a
                    class="card_link"
                    href="#"
                  >Контакты</a></li>
                <li style="padding-bottom: 0;"><a
                    class="card_link"
                    href="#"

                  >Блог</a></li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div
              class="card_body card_soc"
              style="line-height: 24px;"
            >
              Задавайте свои вопросы прямо сейчас

              <ul class="card_soc-list">
                <li>
                  <a href="#!">
                    <font-awesome-icon
                      :icon="[ 'fab', 'viber' ]"
                      class="card_soc-icon card_link"
                    />

                  </a>
                </li>

                <li>
                  <font-awesome-icon
                    :icon="[ 'fab', 'telegram' ]"
                    class="card_soc-icon card_link"
                  />
                </li>
                <li>
                  <a href="#!">
                    <font-awesome-icon
                      :icon="[ 'fab', 'vk' ]"
                      class="card_soc-icon card_link"
                    />
                  </a>
                </li>
                <li>
                  <font-awesome-icon
                    :icon="[ 'fab', 'whatsapp' ]"
                    class="card_soc-icon card_link"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            class="card"
            style="text-align: right;"
          >
            <a
              class="card_header"
              style="margin-bottom: 8px;"
              href="tel:+7-495-748-97-74"
            >+7 (495) 748-97-74</a>
            <div class="card_body">
              <button
                class="card_link"
                style="font-weight: bold;"
              >Заказать звонок</button>
            </div>
          </div>
        </div>

        <div>
          <a
            class="card_link bottom-link"
            href="#"
            target='_blank'
            rel='noopener noreferrer'
          >Политика конфеденциальности</a>
          <span style="float:right">
            <span class="card_link bottom-link" style="border: 0;">Разработано в <a
                class="bottom-link"
                target='_blank'
                rel='noopener noreferrer'
                href="http://koniglabs.ru"
              >KonigLabs</a> </span>
          </span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "./footer-styles.scss";
</style>

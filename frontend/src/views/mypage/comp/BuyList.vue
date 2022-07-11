<template>
  <div class="buy-list">
    <ul class="state">
      <li>
        <strong>거래중</strong>
        <span>3</span>
      </li>
      <li>
        <strong>구매완료</strong>
        <span>12</span>
      </li>
    </ul>

    <AccordionMenu>
      <Accordion>
        <template slot="accordion-trigger">
          <div class="accordion-tit">
            <h3 class="cont-tit02">거래중인 목록</h3>
            <strong>3개상품</strong>
            <IconiFy icon="mi:chevron-down" />
          </div>
        </template>

        <template slot="accordion-content">
          <li v-for="item in lists" :key="item">
            <div class="card-info">
              <div class="profile-wrap">
                <div class="profile-img">
                  <img :src="item.photo" alt="" />
                </div>
                <div class="txt">
                  <span>{{ item.nickname }}</span>
                  <p>{{ item.title }}</p>
                  <strong>{{ item.money }}원</strong>
                </div>
              </div>

              <div class="btn-wrap">
                <a href="javascript:void(0);" class="btn btn-green">거래완료</a>
                <b-dropdown class="btn-dropdown">
                  <template #button-content>
                    <IconiFy icon="mi:options-vertical" />
                  </template>
                  <b-dropdown-item>채팅방가기</b-dropdown-item>
                  <b-dropdown-item>삭제하기</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </li>
        </template>
      </Accordion>

      <Accordion>
        <template slot="accordion-trigger">
          <div class="accordion-tit">
            <h3 class="cont-tit02">구매완료 목록</h3>
            <strong>3개상품</strong>
            <IconiFy icon="mi:chevron-down" class="ico" />
          </div>
        </template>

        <template slot="accordion-content">
          <ul>
            <li v-for="item in lists" :key="item">
              <div class="card-info">
                <div class="profile-wrap">
                  <div class="profile-img">
                    <img :src="item.photo" alt="" />
                  </div>
                  <div class="txt">
                    <span>{{ item.nickname }}</span>
                    <p>{{ item.title }}</p>
                    <strong>{{ item.money }}원</strong>
                  </div>
                </div>

                <div class="btn-wrap">
                  <a href="javascript:void(0);" class="btn btn-green"
                    >거래완료</a
                  >
                  <b-dropdown class="btn-dropdown">
                    <template #button-content>
                      <IconiFy icon="mi:options-vertical" class="ico" />
                    </template>
                    <b-dropdown-item>채팅방가기</b-dropdown-item>
                    <b-dropdown-item>삭제하기</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </li>
          </ul>
        </template>
      </Accordion>
    </AccordionMenu>
  </div>
</template>

<script>
import Accordion from "../../../components/accordion/AccordionContent";
import AccordionMenu from "../../../components/accordion/AccordionMenu";

export default {
  name: "BuyList ",
  components: {
    AccordionMenu,
    Accordion,
  },
  data: function () {
    return {
      lists: [
        {
          photo: require("../../../assets/image/board/sample01.jpg"),
          nickname: "달콤팜",
          title: "새콤달콤 설향딸기",
          money: "4,200",
        },
        {
          photo: require("../../../assets/image/board/sample01.jpg"),
          nickname: "달콤팜",
          title: "새콤달콤 설향딸기",
          money: "4,200",
        },
        {
          photo: require("../../../assets/image/board/sample01.jpg"),
          nickname: "달콤팜",
          title: "새콤달콤 설향딸기",
          money: "4,200",
        },
      ],
    };
  },
};
</script>

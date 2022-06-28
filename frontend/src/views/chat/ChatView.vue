<template>
  <div class="chat-wrap">
    <!-- section-left  -->
    <section class="section-left">
      <h2 class="tit-group">채팅</h2>
      <ul>
        <li v-for="chatNavList in chatNavLists" :key="chatNavList">
          <a href="javascript:void(0);">
            <div class="profile-group">
              <div class="profile-img">
                <img :src="chatNavList.photo" alt="" />
              </div>
              <strong>{{ chatNavList.profileName }}</strong>
              <span>{{ chatNavList.productTit }}</span>
              <em>{{ chatNavList.chatNum }}</em>
            </div>
            <div class="txt-group">
              <p>{{ chatNavList.chatTxt }}</p>
              <span>{{ chatNavList.chatDate }}</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <!--  //section-left  -->

    <!-- section-right  -->
    <section class="section-right">
      <h2 class="sr-only">채팅창</h2>
      <!-- tit-group -->
      <div class="tit-group">
        <div class="chat-info">
          <strong>달콤팜</strong>
          <span>새콤달콤 설향딸기</span>
        </div>
        <div class="btn-group">
          <a href="javascript:void(0);">상품보기</a>
          <a href="javascript:void(0);" class="btn btn-green">거래 완료</a>
        </div>
      </div>
      <!-- // tit-group -->
      <!-- chat-body -->
      <div class="chat-body">
        <div class="chat-cont">
          <!-- message-group -->
          <div class="message-group">
            <span class="date">3월 22일 2022</span>
            <p>시내물 졸졸 님께서 아래 상품에 대한 채팅을 시작하였습니다.</p>
            <div class="chat-message mine">
              <div>
                <img src="" alt="" />
                <div class=""></div>
                <a href="javascript:void(0);">상품보기</a>
              </div>
              <div
                class="chat"
                v-for="chatBodyList in chatBodyLists"
                :key="chatBodyList"
              >
                <p>{{ chatBodyList.text }}</p>
                <span>{{ chatBodyList.time }}{{ chatBodyList.meridiem }}</span>
              </div>
            </div>
          </div>
          <!--  // message-group -->

          <span class="date">3월 23일 2022</span>

          <div class="chat-item">
            <ul class="chat-list chat-right">
              <li>
                <p>2kg 딸기 주문하고싶습니다. 혹시 직거래 가능하신가요?</p>
              </li>
            </ul>
          </div>

          <div class="chat-result result-left">
            <p>
              판매자가 <strong>거래완료</strong>를 선택하였습니다. 구매를
              완료하셨다면 버튼을 클릭해주세요.
            </p>
            <a href="javascript:void(0);">거래 완료</a>
            <a href="javascript:void(0);">거래 완료 취소</a>
          </div>
          <div class="chat-result result-right">
            <p>
              판매자가 <strong>거래완료</strong>를 선택하였습니다. 구매를
              완료하셨다면 버튼을 클릭해주세요.
            </p>
            <a href="javascript:void(0);">거래 완료 취소</a>
            <a href="javascript:void(0);">리뷰 남기기</a>
          </div>
        </div>
        <div class="chat-input">
          <label for="chat"
            ><span class="sr-only">채팅글 작성 영역</span></label
          >
          <input type="text" id="chat" placeholder="메시지를 입력해주세요" />
          <a href="javascript:void(0);">보내기</a>
        </div>
      </div>
      <!--  // chat-body -->
    </section>
    <!-- // section-right  -->
  </div>
</template>

<script>
export default {
  name: "ChatView",
  data: function () {
    return {
      chatNavLists: [
        {
          photo: require("../../assets/image/board/sample01.jpg"),
          profileName: "딸기노장",
          productTit: "킹사이즈 딸기 2kg...",
          chatNum: "13",
          chatTxt: "직거래하고싶습니다! 연락가능한시간알려주세요",
          chatDate: "어제",
        },
        {
          photo: require("../../assets/image/board/sample01.jpg"),
          profileName: "딸기노장",
          productTit: "킹사이즈 딸기 2kg...",
          chatNum: "13",
          chatTxt: "직거래하고싶습니다! 연락가능한시간알려주세요",
          chatDate: "어제",
        },
      ],

      chatBodyLists: [
        {
          text: "2kg 딸기 주문하고싶습니다. 혹시 직거래 가능하신가요?",
          time: "5:20",
          meridiem: "PM",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#header .util-wrap,
#header .gnb,
#footer {
  display: none;
}
.header {
  border-bottom: 0;
  margin-bottom: 0;
  border-bottom: 1px solid #e0e0e0;
}
.grab {
  max-width: 100%;
  padding-right: 25px;
  padding-left: 25px;
}
</style>

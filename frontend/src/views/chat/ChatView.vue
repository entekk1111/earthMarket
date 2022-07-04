<template>
  <div class="chat-wrap">
    <!-- section-left  -->
    <section class="section-left">
      <h2 class="tit-group">채팅</h2>
      <ul>
        <li
          v-for="chatNavList in chatNavLists"
          :key="chatNavList"
          class="active"
        >
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
        <li>
          <a href="javascript:void(0);"
            ><div class="profile-group">
              <div class="profile-img">
                <img src="/img/sample01.86ecbf91.jpg" alt="" />
              </div>
              <strong>딸기노장</strong><span>킹사이즈 딸기 2kg...</span
              ><em>13</em>
            </div>
            <div class="txt-group">
              <p>직거래하고싶습니다! 연락가능한시간알려주세요</p>
              <span>어제</span>
            </div></a
          >
        </li>
        <li class="disabled">
          <a href="javascript:void(0);"
            ><div class="profile-group">
              <div class="profile-img">
                <img src="/img/sample01.86ecbf91.jpg" alt="" />
              </div>
              <strong>딸기노장</strong><span>킹사이즈 딸기 2kg...</span
              ><em>13</em>
            </div>
            <div class="txt-group">
              <p>직거래하고싶습니다! 연락가능한시간알려주세요</p>
              <span>어제</span>
            </div></a
          >
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
          <a href="javascript:void(0);" class="btn-line-black">상품보기</a>
          <a href="javascript:void(0);" class="btn btn-green">거래 완료</a>
        </div>
      </div>
      <!-- // tit-group -->
      <!-- chat-body -->
      <div class="chat-body">
        <div class="chat-cont">
          <!-- message-group -->
          <div
            class="message-group"
            v-for="message in messageList"
            :key="message"
          >
            <span class="date"
              >{{ message.month }}월 {{ message.date }}일
              {{ message.year }}</span
            >

            <!-- chat-message  -->
            <div class="chat-message mine">
              <div class="inner">
                <p class="notice-message">
                  {{ message.user }}님께서 아래 상품에 대한 채팅을
                  시작하였습니다.
                </p>
                <div class="card-info">
                  <div class="profile-wrap">
                    <div class="profile-img">
                      <img :src="message.photo" alt="" />
                    </div>
                    <div class="txt">
                      <span>달콤팜</span>
                      <p>새콤달콤 설향딸기</p>
                      <strong>4,2000원</strong>
                    </div>
                  </div>
                  <a href="javascript:void(0);" class="btn btn-green-line"
                    >상품보기</a
                  >
                </div>
                <div class="message">
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                  <p class="chat">{{ message.text }}</p>
                </div>
              </div>
            </div>
            <!-- // chat-message  -->

            <!-- chat-message  -->
            <div class="chat-message other">
              <div class="inner">
                <div class="message">
                  <div class="profile-img">
                    <img :src="message.photo" alt="" />
                  </div>
                  <p class="chat">{{ message.text }}</p>
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                </div>
              </div>
            </div>
            <!-- //  chat-message  -->
            <!-- chat-message  -->
            <div class="chat-message other">
              <div class="inner">
                <div class="message">
                  <div class="profile-img">
                    <img :src="message.photo" alt="" />
                  </div>
                  <p class="chat">{{ message.text }}</p>
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                </div>
              </div>
            </div>
            <!-- //  chat-message  -->
            <!-- chat-message  -->
            <div class="chat-message other">
              <div class="inner">
                <div class="message">
                  <div class="profile-img">
                    <img :src="message.photo" alt="" />
                  </div>
                  <p class="chat">{{ message.text }}</p>
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                </div>
              </div>
            </div>
            <!-- //  chat-message  -->

            <!-- chat-message  -->
            <div class="chat-message mine">
              <div class="inner">
                <div class="message">
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                  <p class="chat">{{ message.text }}</p>
                </div>
              </div>
            </div>
            <!-- // chat-message  -->
            <!-- chat-message  -->
            <div class="chat-message mine">
              <div class="inner">
                <div class="message">
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                  <p class="chat">{{ message.text }}</p>
                </div>
              </div>
            </div>
            <!-- // chat-message  -->
          </div>
          <!--  // message-group -->

          <!-- message-group -->
          <div
            class="message-group"
            v-for="message in messageList"
            :key="message"
          >
            <span class="date"
              >{{ message.month }}월 {{ message.date }}일
              {{ message.year }}</span
            >

            <!-- chat-message  -->
            <div class="chat-message mine">
              <div class="inner">
                <div class="message">
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                  <p class="chat">{{ message.text }}</p>
                </div>
              </div>
            </div>
            <!-- // chat-message  -->

            <!-- chat-message  -->
            <div class="chat-message other">
              <div class="inner">
                <div class="message">
                  <div class="profile-img">
                    <img :src="message.photo" alt="" />
                  </div>
                  <p class="chat">{{ message.text }}</p>
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                </div>
              </div>
            </div>
            <!-- //  chat-message  -->

            <!-- chat-message  -->
            <div class="chat-message other">
              <div class="inner">
                <div class="message">
                  <div class="profile-img">
                    <img :src="message.photo" alt="" />
                  </div>
                  <p class="chat">{{ message.text }}</p>
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                </div>
              </div>
            </div>
            <!-- //  chat-message  -->
            <!-- chat-message  -->
            <div class="chat-message other">
              <div class="inner">
                <div class="message">
                  <div class="profile-img">
                    <img :src="message.photo" alt="" />
                  </div>
                  <p class="chat">{{ message.text }}</p>
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                </div>
              </div>
            </div>
            <!-- //  chat-message  -->

            <!-- chat-message  -->
            <div class="chat-message mine">
              <div class="inner">
                <div class="message">
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                  <p class="chat">{{ message.text }}</p>
                </div>
              </div>
            </div>
            <!-- // chat-message  -->
            <!-- chat-message  -->
            <div class="chat-message mine">
              <div class="inner">
                <div class="message">
                  <span class="time"
                    >{{ message.time }}{{ message.meridiem }}</span
                  >
                  <p class="chat">{{ message.text }}</p>
                </div>
              </div>
            </div>
            <!-- // chat-message  -->
          </div>
          <!--  // message-group -->

          <!-- chatResult-wrap -->
          <div class="chatResult-wrap">
            <!-- chat-result -->
            <div class="chat-result mine">
              <div class="inner">
                <p>상품 판매 거래를 완료했습니다.</p>
                <a href="javascript:void(0);" class="btn-line-gray"
                  >거래 완료 취소</a
                >
              </div>
            </div>
            <!--  // chat-result -->

            <!-- chat-result -->
            <div class="chat-result mine blue">
              <div class="inner">
                <p>
                  판매자가 <strong>거래완료</strong>를 선택하였습니다. 구매를
                  완료하셨다면 버튼을 클릭해주세요.
                </p>
                <a href="javascript:void(0);" class="btn btn-green-line"
                  >거래 완료</a
                >
              </div>
            </div>
            <!--  // chat-result -->

            <!-- chat-result  -->
            <div class="chat-result other">
              <div class="inner">
                <p>
                  판매자가 <strong>거래완료</strong>를 선택하였습니다. 구매를
                  완료하셨다면 버튼을 클릭해주세요.
                </p>
                <a href="javascript:void(0);" class="btn btn-green-line"
                  >거래 완료 취소</a
                >
              </div>
            </div>
            <!-- //  chat-result  -->
          </div>
          <!--  // chatResult-wrap -->
        </div>

        <!-- chat-input -->
        <div class="chat-input">
          <label for="chat"
            ><span class="sr-only">채팅글 작성 영역</span></label
          >
          <input type="text" id="chat" placeholder="메시지를 입력해주세요" />
          <a href="javascript:void(0);">보내기</a>
        </div>
        <!-- // chat-input -->
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
      messageList: [
        {
          month: "03",
          date: "22",
          year: "2022",
          user: "시내물 졸졸",
          photo: require("../../assets/image/board/sample01.jpg"),
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
@import "~@/assets/scss/pages/chat";
.wide #header .gnb,
.wide #footer {
  display: none;
}
.chat-container .header {
  margin-bottom: 0;
  .grab {
    .util-wrap {
      .link-join {
        margin-right: 25px;
        li {
          display: none;
          &.link-mypage {
            display: block;
          }
        }
      }
      .btn {
        display: none;
      }
    }
  }
}
</style>

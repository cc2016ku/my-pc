<template>
  <div class="info-list">
    <ul class="msg-ul">
      <li
        class="msg-li"
        v-for="item in msgArr"
        :key="item.id"
        :class="item.isFriend === 'Y' ? 'msg-friend' : ''"
      >
        <span class="msg-name"
          >{{ item.name }}
          <span class="is-friend">{{
            item.isFriend === "Y" ? "好友" : "陌生人"
          }}</span></span
        >
        <span class="msg-info"
          >{{ item.msg }}
          <span class="msg-count">{{
            item.msgCount > 99 ? "99+" : item.msgCount
          }}</span></span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgArr: [
        {
          id: 1,
          name: "小红",
          msg: "你好",
          isFriend: "Y",
          isNew: "Y",
          msgCount: 10,
        },
        {
          id: 11,
          name: "小花花",
          msg: "你好美",
          isFriend: "Y",
          isNew: "N",
          msgCount: 10,
        },
        {
          id: 12,
          name: "欣荣",
          msg: "你好美",
          isFriend: "Y",
          isNew: "N",
          msgCount: 10,
        },
        {
          id: 13,
          name: "卫庄",
          msg: "流沙首领",
          isFriend: "N",
          isNew: "Y",
          msgCount: 100,
        },
        {
          id: 14,
          name: "墨玉麒麟",
          msg: "鬼才杀手",
          isFriend: "N",
          isNew: "Y",
          msgCount: 10,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.msg-ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  .msg-li {
    width: 50%;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    background: lemonchiffon;
    margin: 10px;
    color: #2c3e50;
    &:hover {
      cursor: pointer;
    }
    .msg-name {
      float: right;
      padding-right: 30px;
    }
    .msg-info {
      width: 60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      float: left;
      padding-left: 30px;
    }
    .is-friend {
      background: #6ca8f6;
      padding: 3px 6px;
      border-radius: 5px;
      font-size: 12px;
    }
    .msg-count {
      display: inline-block;
      width: 30px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border-radius: 50%;
      background: #e6437f;
      font-size: 12px;
    }
  }
  .msg-friend {
    background: rgb(246, 150, 180);
  }
}
</style>

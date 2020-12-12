<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      v-for="user in activeUser"
      :key="user.id"
      :full-name="user.name"
      :info-text="user.description"
      :role="user.role"
    />
  </div>
</template>

<script>
//Importing components The header, BadgeList, UserInfo
import TheHeader from "../components/Lesson8/TheHeader";
import BadgeList from "../components/Lesson8/BadgeList";
import UserInfo from "../components/Lesson8/UserInfo";
export default {
  components: {
    //Exporting components so we can use on Template
    TheHeader,
    UserInfo,
    BadgeList,
  },
  data() {
    return {
      //An arrays of objects of users
      activeUser: [
        {
          id: 0,
          name: "Kastriot Gashi",
          description: "Web developer",
          role: "admin",
        },
        {
          id: 1,
          name: "John Doe",
          description: "Content Writter",
          role: "author",
        },
      ],
    };
  },
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

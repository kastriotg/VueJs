<template>
  <div>
    <TheHeader/>
    <BadgeList/>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
  </div>
</template>

<script>
//Importing components The header, BadgeList, UserInfo
import TheHeader from '../components/Lesson8/TheHeader'
import BadgeList from '../components/Lesson8/BadgeList'
import UserInfo from '../components/Lesson8/UserInfo'
export default {
  components:{
    //Exporting components so we can use on Template
      TheHeader,
      UserInfo,
      BadgeList
  },
  data() {
    return {
      //An object of user
      activeUser: {
        name: 'Kastriot Gashi',
        description: 'Web developer',
        role: 'admin',
      },
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
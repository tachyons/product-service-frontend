<script>
export default {
  name: "Logout",
  created() {
    delete localStorage.access_token;
    this.$store.dispatch("logout");
    this.$router.push({ name: "login" });
  }
};
</script>

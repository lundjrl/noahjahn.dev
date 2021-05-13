<template>
  <div class="sidebar">
    <img class="profile" src="../assets/img/profile.svg">
    <h4 class="custom"><b>{{ name }}</b></h4>
    <h5 class="custom">
      <i>
      {{ title }}<br>
      based in {{ city }}, {{ stateInitial }}
      </i>
    </h5>
    <div class="cert-badges">
      <a target="_blank" href="https://www.youracclaim.com/badges/10b761b4-ee7a-4ba3-b3d3-0fa5fe9fb7ae/public_url">
        <img class="cert-badge" src="../assets/img/aws-certified-cloud-practitioner-sm.png">
      </a>
    </div>
    <div>
      <a class="contact-link" href="https://www.linkedin.com/in/noahjahn" target="_blank">
        <img class="contact-icon" src="../assets/img/linkedin.svg">
      </a>
      <a class="contact-link" href="https://github.com/noahjahn" target="_blank">
        <img class="contact-icon" src="../assets/img/github.svg">
      </a>
      <a class="contact-link" href="https://gitlab.com/noah.jahn" target="_blank">
        <img class="contact-icon" src="../assets/img/gitlab.svg">
      </a>
      <a class="contact-link" href="mailto:najahn19@gmail.com" target="_blank">
        <img class="contact-icon" src="../assets/img/email.svg">
      </a>
    </div>
    <div>
      <h5 class="custom">
        <i>Dark mode</i>
        <div class="switch">
          <div class="switch-circle"></div>
        </div>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    name: String,
    title: String,
    city: String,
    stateInitial: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile {
    text-align: center;
}

.contact-link {
    display: inline-block;
}

.contact-icon {
    height: 24px;
    width: 24px;
    padding-right: 6px;
}

.cert-badge {
    width: 70px;
    padding-right: 1rem;
}

.cert-badges a {
    display: inline-block;
}

@media (min-width: 550px) {
    .profile {
        width: 100%;
    }
}

@media (min-width: 800px) {
    .sidebar {
        position: fixed;
    }
}
</style>

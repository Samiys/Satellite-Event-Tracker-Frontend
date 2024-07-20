<template>
  <div class="container-fluid mt-2 mb-5">
    <div class="header-margin">
      <div class="header d-flex justify-content-between align-items-center mb-3">
        <h2 class="title">Home</h2>
        <button @click="navigateToCreateEvent" class="btn btn-modern">Create New Event</button>
      </div>
    </div>
    <EventTable :events="events"/>
  </div>
</template>

<script>
import EventTable from '@/components/EventTable.vue';
import eventService from "@/services/EventService";

export default {
  components: {
    EventTable,
  },
  data() {
    return {
      events: [],
    };
  },
  methods: {
    fetchEvents() {
      eventService.getEvents().then(response => {
        this.events = response.data;
      }).catch(error => {
        console.error("There was an error fetching the events:", error);
      });
    },
    navigateToCreateEvent() {
      this.$router.push('/create-event');
    }
  },
  mounted() {
    this.fetchEvents();
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: white;
}

.btn-modern {
  background: #6fc168;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn-modern:hover {
  background: #9263ab;
  color: white;
  transform: translateY(-2px);
}

.btn-modern:active {
  transform: translateY(1px);
}

.header-margin {
  margin: 0 160px 0 160px;
}
</style>

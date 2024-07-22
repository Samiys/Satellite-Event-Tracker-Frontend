<template>
  <div class="container-fluid mt-2">
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

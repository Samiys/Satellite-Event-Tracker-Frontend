<template>
  <div class="events-container">
    <h2 class="title">SATELLITE EVENTS</h2>
    <input type="text" v-model="search" class="search-input" placeholder="Search by Satellite Name">

    <div v-if="tleInfo" class="tle-info">
      <h3>TLE Information for {{ selectedEvent.satelliteName }}</h3>
      <pre class="tle-scroll">{{ tleInfo }}</pre>
    </div>

    <table class="events-table">
      <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Priority</th>
        <th>Satellite Name</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="event in filteredEvents"
          :key="event.id"
          :class="{'highlighted-row': selectedEvent && selectedEvent.id === event.id, 'cursor-default': true}"
          @click="selectEvent(event)"
      >
        <td>{{ event.date }}</td>
        <td>{{ event.description }}</td>
        <td>{{ event.priority }}</td>
        <td>{{ event.satelliteName }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EventService from '@/services/EventService';

export default {
  props: ['events'],
  data() {
    return {
      search: '',
      selectedEvent: null,
      tleInfo: null
    };
  },
  computed: {
    filteredEvents() {
      if (this.search) {
        return this.events.filter(event => event.satelliteName.toLowerCase().includes(this.search.toLowerCase()));
      }
      return this.events;
    }
  },
  methods: {
    selectEvent(event) {
      this.selectedEvent = event;
      this.fetchTleInfo(event.satelliteName);
    },
    fetchTleInfo(satelliteName) {
      EventService.getTleInfo(satelliteName)
          .then(response => {
            this.tleInfo = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the TLE information:", error);
          });
    }
  }
};
</script>

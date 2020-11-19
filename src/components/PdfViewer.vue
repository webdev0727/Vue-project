<template>
  <vue-friendly-iframe :src="url" className="pdf-viewer"></vue-friendly-iframe>
</template>

<script>
export default {
  name: 'PdfViewer',
  props: {
    /**
    * Set url of the PDF. Default: '',
    */
    fileUrl: {
      type: String,
      default: '',
    },
  },
  computed: {
    /**
    * Get the base url of the google document viewer
    */
    baseUrl() {
      return 'https://drive.google.com/viewerng/viewer';
    },
    /**
    * Merge the base url and the fileUrl to create the iFrame src url
    */
    url() {
      return `${this.baseUrl}?embedded=true&url=${this.fileUrl}#toolbar=0&scrollbar=0`;
    },
  },
};
</script>

<style>
.pdf-viewer {
  width: 100%;
  min-height: 500px;
}
</style>

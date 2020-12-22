<template>
    <base-layout page-title="All Memories">
        <ion-list>
            <ion-item>A trip into the mountains</ion-item>
            <ion-item>Watching Apocalypto</ion-item>
            <ion-item>Going for Adventure</ion-item>
        </ion-list>
    </base-layout>
</template>

<script>
import { IonList, IonItem } from '@ionic/vue';
// import BaseLayout from '../components/base/BaseLayout.vue';

export default {
    components: {
        IonItem,
        IonList
    }
}
</script>
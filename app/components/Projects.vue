<template>
  <section class="py-20 px-6 md:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="mb-10">
        <span class="text-xs uppercase tracking-widest text-gray-500">Proyectos</span>
        <h2 v-reveal class="reveal reveal-up text-xl font-bold leading-tight mt-2 mb-10">
          Algunos trabajos recientes.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          v-for="(img, i) in images"
          :key="i"
          v-reveal
          :src="img"
          alt="Proyecto"
          class="reveal reveal-up w-full object-cover cursor-pointer hover:opacity-80 transition md:h-64"
          @click="openModal(i)"
        />
      </div>

      <div v-reveal class="reveal reveal-up text-center mt-10">
        <button
          class="inline-block border border-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-black hover:text-white transition"
          @click="openGallery"
        >
          Ver todos los proyectos
        </button>
      </div>
    </div>

    <ImageModal
      v-model="modalOpen"
      :images="allImages"
      :index="modalIndex"
      @update:index="modalIndex = $event"
    />
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()

const modalOpen = ref(false)
const modalIndex = ref(0)

const images = [
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/quinta_enm7yu.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162167/sexta_gxukkl.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162166/septima_khzxtp.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/octava_wpka70.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/novena_iyw3ma.jpg',
]

const allImages = [
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538616/1_vd9tlh.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538669/2_rnreoe.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538616/3_fl7jvd.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538613/4_shnvjw.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538615/6_u3quql.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538634/7_wehb93.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538639/9_cpbhrn.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538640/10_de0i4s.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538626/12_vhepkj.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538612/13f_idra53.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538609/14_nnew36.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538668/15_golal6.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538620/15d_zyddqz.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538606/19598990_10155611169214653_1635320511078667158_n_auxftl.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538611/22_uklafs.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538614/23_qj1lga.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538625/24_g0ftcn.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538654/28d_osbkay.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538665/70_dubofn.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538661/97_f0g6i1.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538613/Adolfo_Callejo._azt2ac.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538608/AMAIASALAMANCA2_hhq6jv.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538614/BLANCO_nqsex5.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538616/BLANCO_2_zhu2i6.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538649/E_15_smhzy7.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538609/Estudio50_tbw6qd.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538664/FG_ketreu.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538608/I_20_20_1_aaaiw3.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538617/IMG-20170131-WA0015_jqsngl.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538611/JJ_nxhm9f.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538610/JOSECORONADO_hpvfd8.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538619/KK_u5umkw.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538607/MAIL_mhmjkr.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538626/NACHO_DUATO_copy_ethuql.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538671/Shooting_nutrisse-016_jyj5mz.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538675/_DSC3372_qvixqb.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538674/_DSC3406_srpfed.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538673/_DSC3431_pxesxs.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538670/_DSC3450_pttjan.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538641/_DSC3896_g0tsue.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/a_auto/v1781538654/_DSC4162_vaye7h.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538644/_DSC4168_c2pzbv.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538651/_DSC4175_bkofau.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/a_auto/v1781538624/_DSC4388___LR_yudfnd.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/a_auto/v1781538623/_DSC4153___LR_x2tz3r.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/a_auto/v1781538625/_DSC4697___LR_kggqap.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538627/_DSC5011_zecijj.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538666/_DSC5579_mith0p.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538643/_DSC6044_eju6qw.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538641/_DSC8090_jl00h6.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538675/_DSC8506_werdii.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538660/_DSC9210_w2slqc.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538665/_DSC9214_ijtson.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538647/_DSC9188_h9dib0.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538674/_DSC9819_spnukg.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538671/_DSC9849_hfke9x.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538632/_DSC1712_x3qz4k.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538667/_DSC1845_wuqbic.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538646/_DSC2664_copia_vx7fg3.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538642/_DSC2673_copia_xdrnzk.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538629/_DSC0069_nijasj.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538657/10_hlrh4g.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538652/_MG_0281_s08den.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538647/_MG_1400_copia_lpyrnm.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538644/_MG_1336_copia_lxhsdt.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538639/_MG_2046_copia_ivdc5g.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538664/_MG_2584_ngqjbe.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538650/_MG_3978_copia_eniw7x.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538635/_MG_3983_vbg7yr.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538634/_MG_4212_copia_e2aga4.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538631/_MG_4180_copia_copia_fdkexa.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538627/_MG_6226_copia_nhpc71.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538654/_MG_7382_copia_ouqulz.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538638/_MG_7396_copia_xonnqy.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538632/_MG_7423_copia_cryxn3.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538663/_MG_7879_copia_enljzg.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538631/_MG_8680_copia_yxezvt.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538665/_MG_8952_copia_k5a8f9.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538651/_MG_9862_copia_gk2wli.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538615/nw_gq6yxm.jpg',
]

function openModal(index: number) {
  modalIndex.value = index
  modalOpen.value = true
}

function openGallery() {
  modalIndex.value = -1
  modalOpen.value = true
}
</script>

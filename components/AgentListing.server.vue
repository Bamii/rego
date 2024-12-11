<template>
this is usre data
</template>

<script setup>
  import prisma from "~/lib/prisma"
  // const cookie = useCookie('access_token')
  // console.log(cookie)
  // console.log(prisma.user)
  const data = await prisma.user.findMany({})
  // console.log("userdata", data)
</script>
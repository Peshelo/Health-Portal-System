<template>
  <!-- This is an example component -->
<div>
	<div class="container py-3 mx-auto grid">
		<div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
			<div class="flex items-center p-4 bg-yellow-400 rounded-lg shadow-xs border">
				<div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler w-7 h-7 icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
   <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
   <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
</svg>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-gray-600">
						Total Doctors
					</p>
					<p class="text-2xl font-semibold text-gray-700">
						{{ doctors }}
					</p>
				</div>
			</div>
			<div class="flex items-center p-4 bg-green-500 rounded-lg shadow-xs border">
				<div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler w-7 h-7 icon-tabler-calendar-time" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
   <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
   <path d="M15 3v4"></path>
   <path d="M7 3v4"></path>
   <path d="M3 11h16"></path>
   <path d="M18 16.496v1.504l1 1"></path>
</svg>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-gray-600">
						Upcoming appointments
					</p>
					<p class="text-2xl font-semibold text-gray-700">
						{{ appointments }}
					</p>
				</div>
			</div>
			<div class="flex items-center p-4 bg-red-500 rounded-lg shadow-xs border">
				<div class="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler w-7 h-7 icon-tabler-microscope" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 21h14"></path>
   <path d="M6 18h2"></path>
   <path d="M7 18v3"></path>
   <path d="M9 11l3 3l6 -6l-3 -3z"></path>
   <path d="M10.5 12.5l-1.5 1.5"></path>
   <path d="M17 3l3 3"></path>
   <path d="M12 21a6 6 0 0 0 3.715 -10.712"></path>
</svg>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-gray-600">
						Lab Results
					</p>
					<p class="text-2xl font-semibold text-gray-700">
						{{ results }}
					</p>
				</div>
			</div>
			<div class="flex items-center p-4 bg-orange-500 rounded-lg shadow-xs border">
				<div
					class="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler w-7 h-7 icon-tabler-jewish-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 2l3 5h6l-3 5l3 5h-6l-3 5l-3 -5h-6l3 -5l-3 -5h6z"></path>
</svg>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-gray-600">
						User Rating
					</p>
					<p class="text-2xl font-semibold text-gray-700">
						4.5
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>

export default {
	props: {
    doctors: {
      type: Number,
      required: false,
    },
    appointments: {
      type: Number,
      required: false,
    },
	results: {
      type: Number,
      required: false,
    },
	rating: {
      type: Number,
      required: false,
    }
  }

}
</script>

<style>

</style>
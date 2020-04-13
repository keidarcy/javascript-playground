<div class="border border-gray-300 my-6 rounded-lg">
    <div class="flex p-5 items-center">
        <div class="mr-5 flex-shrink-0">
            <img class="rounded-full mr-2" src="{{ auth()->user()->avatar }}" alt="">
        </div>
        <div>
            <h5 class="font-bold mb-4">{{ $tweet->user->name }}</h5>
            <p class="text-sm">
                {{ $tweet->body }}
            </p>
        </div>
    </div>
</div>

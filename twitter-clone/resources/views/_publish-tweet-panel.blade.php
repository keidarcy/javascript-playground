<div class="border border-blue-200 rounded-lg px-8 py-4">
    <form action="/tweets" method="POST">
        @csrf
        <textarea name="body" id="" required class="w-full" placeholder="Tell me your secret"></textarea>
        <hr class="my-4">
        <footer class="flex justify-between">
            <img class="rounded-full mr-2" src="{{ auth()->user()->avatar }}" alt="Your Avatar">
            <button type="submit" class="bg-blue-500 py-2 px-3 text-white rounded-lg shadow-md">
                Tweet-a-rool
            </button>
        </footer>
    </form>
</div>

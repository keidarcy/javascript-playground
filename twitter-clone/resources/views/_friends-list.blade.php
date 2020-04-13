<h3 class="font-bold text-xl mb-4">Friends</h3>
<ul>
    @foreach (range(1,8) as $item)
    <li class="mb-4">
        <div class="flex items-center text-sm">
            <img class="rounded-full mr-2" src="https://i.pravatar.cc/40" alt="">
            John Doe
        </div>
    </li>
    @endforeach
</ul>

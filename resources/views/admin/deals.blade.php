@extends('admin.app')
@section('content')

    <div class="inbox-head">
        <h3>Les commandes</h3>
    </div>
    <div class="inbox-body">
        <div class="mail-option">


            <div class="btn-group">
                <a data-original-title="Refresh" data-placement="top" href="/admin/deals" class="btn mini tooltips">
                    <i class=" fas fa-sync-alt"></i>
                </a>
            </div>

            {{ $deals->links() }}
        </div>
        <table class="table table-striped">
            <thead>
            <th>Nom</th>
            <th>email</th>
            <th>Telephone</th>
            <th>Addresse</th>
            <th>Suivre</th>
            <th>Afficher</th>
            </thead>
            <tbody>
            @foreach($deals as $deal)
                <tr>
                    <td>{{ $deal->name }}</td>
                    <td>{{ $deal->email }}</td>
                    <td>{{ $deal->phone }}</td>
                    <td>{{ $deal->address }}</td>
                    <td>{{ Form::select('status',['nouveau','envoyé','payé'],$deal->status,['class'=>'form-control status-input','data-id'=>$deal->id]) }}</td>
                    <td><a href="/admin/deal/{{ $deal->id }}">Afficher</a></td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
    <script>

        $("#deals-li").addClass("active");
        $('.status-input').change(function(){
            updateValues($(this).data("id"),$(this).val());
        });
        function updateValues(id,value) {
            var token="{{ csrf_token()  }}";
            $.ajax({
                    url: '/admin/updateStatus',
                    type:'post',
                    data:{id:id,value:value,_token:token},
                    async:false,
                    success:function (data) {
                    }
                }
            )
        }
    </script>
@endsection